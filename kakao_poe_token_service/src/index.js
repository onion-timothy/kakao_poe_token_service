const express = require('express');
const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const { readVdf, writeVdf } = require('steam-binary-vdf');
const { exec, execSync } = require('child_process');
const cors = require('cors');

const app = express();
const PORT = 3000;

// GET 엔드포인트
app.use(express.json());  // 요청 본문을 JSON으로 파싱합니다.
app.use(cors());
app.post('/api/prompt_vdf', async (req, res) => {
    try {
        // 바디에서 token과 user_number를 가져옵니다
        const { token, user_number } = req.body;

        if (!token || !user_number) {
            return res.status(400).json({ error: 'token과 user_number가 필요합니다.' });
        }

        // config.json 읽기
        const configPath = path.join(__dirname, 'config.json');
        const configData = JSON.parse(await fs.readFile(configPath, 'utf8'));

        // user_id가 포함된 VDF 파일 경로 생성
        const vdfFilePath = path.join(
            '/home/deck',
            '.steam',
            'steam',
            'userdata',
            configData.user_id.toString(),
            'config',
            'shortcuts.vdf'
        );

        // VDF 파일 존재 여부 확인
        await fs.access(vdfFilePath);

        // VDF 파일 읽기 (동기 메서드 사용)
        const fileBuffer = fsSync.readFileSync(vdfFilePath);

        // VDF 파일 파싱 (readVdf 사용)
        const shortcuts = readVdf(fileBuffer);

        // 콘솔에 출력
        for (let key in shortcuts.shortcuts) {
            if (shortcuts.shortcuts[key].Exe.includes("PathOfExile_KG")) {
                // 원하는 LaunchOptions 값으로 변경
                shortcuts.shortcuts[key].LaunchOptions = "--kakao " + token + " " + user_number;
            }
        }

        const outBuffer = writeVdf(shortcuts);
        await fs.writeFile(vdfFilePath, outBuffer);
        await killSteamAndRestartBackground();  // 스팀 재시작

        // 클라이언트에 응답
        res.json(shortcuts);
    } catch (error) {
        console.error('오류:', error);
        if (error.code === 'ENOENT') {
            res.status(404).json({ error: 'VDF 파일을 찾을 수 없습니다.' });
        } else {
            res.status(500).json({ error: '파일 처리 중 오류가 발생했습니다.' });
        }
    }
});

// 프로세스 종료 여부를 확인하는 함수 (killall 결과로 확인)
function isSteamProcessKilled() {
    try {
        // killall 명령어로 Steam 프로세스 종료 시도
        const result = execSync('killall steam', { stdio: 'pipe' });
        return result.toString().includes('steam: no process found');
    } catch (error) {
        // "no process found" 메시지가 나오는 경우 정상 종료된 것으로 간주
        if (error.stdout && error.stdout.toString().includes('steam: no process found')) {
            return true;
        }
        return false;
    }
}

// Steam 프로세스를 종료하고 재시작하는 함수
async function killSteamAndRestartBackground() {
    try {
        // Step 1: Steam 프로세스가 실행 중이라면 killall로 종료
        console.log('Steam 프로세스를 종료합니다...');
        const killSuccess = isSteamProcessKilled();

        if (killSuccess) {
            console.log('Steam 프로세스가 정상적으로 종료되었습니다.');
        } else {
            console.log('Steam 프로세스가 실행 중이지 않거나 종료에 실패했습니다.');
        }

        // Step 2: Steam을 백그라운드에서 재시작
        console.log('Steam 프로세스를 백그라운드에서 재실행합니다...');
        exec('steam &', (error, stdout, stderr) => {
            if (error) {
                console.error(`Steam 재시작 오류: ${stderr}`);
                return false;
            }
            return true;
        });
    } catch (error) {
        console.error('Steam 재시작 도중 오류 발생', error);
        return false;
    }
}

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});