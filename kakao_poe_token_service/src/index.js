const express = require('express');
const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const { readVdf, writeVdf } = require('steam-binary-vdf');
const { exec, execSync } = require('child_process');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.post('/api/prompt_vdf', async (req, res) => {
    try {
        const { token, user_number } = req.body;

        if (!token || !user_number) {
            return res.status(400).json({ error: 'token과 user_number가 필요합니다.' });
        }

        const configPath = path.join(__dirname, 'config.json');
        const configData = JSON.parse(await fs.readFile(configPath, 'utf8'));

        const vdfFilePath = path.join(
            '/home/deck',
            '.steam',
            'steam',
            'userdata',
            configData.user_id.toString(),
            'config',
            'shortcuts.vdf'
        );

        await fs.access(vdfFilePath);
        const fileBuffer = fsSync.readFileSync(vdfFilePath);
        const shortcuts = readVdf(fileBuffer);
        
        for (let key in shortcuts.shortcuts) {
            if (shortcuts.shortcuts[key].Exe.includes("PathOfExile_KG")) {
                shortcuts.shortcuts[key].LaunchOptions = "--kakao " + token + " " + user_number;
            }
        }

        const outBuffer = writeVdf(shortcuts);
        await fs.writeFile(vdfFilePath, outBuffer);
        await killSteamAndRestartBackground();
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

function isSteamProcessKilled() {
    try {
        const result = execSync('killall steam', { stdio: 'pipe' });
        return result.toString().includes('steam: no process found');
    } catch (error) {
        if (error.stdout && error.stdout.toString().includes('steam: no process found')) {
            return true;
        }
        return false;
    }
}

async function killSteamAndRestartBackground() {
    try {
        console.log('Steam 프로세스를 종료합니다...');
        const killSuccess = isSteamProcessKilled();

        if (killSuccess) {
            console.log('Steam 프로세스가 정상적으로 종료되었습니다.');
        } else {
            console.log('Steam 프로세스가 실행 중이지 않거나 종료에 실패했습니다.');
        }

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

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
