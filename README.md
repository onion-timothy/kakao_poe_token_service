# Kakao POE2 Token Service for Steam Deck

Node.JS를 사용한 Kakao POE2 토큰 설정 서비스입니다.  
크롬 익스텐션에서 Node.JS 서버의 API를 호출하면, LaunchOptions를 수정하고 스팀을 재시작합니다.  
먼저 비 스팀 게임으로 POE 2가 설치되어야 합니다.  
설치 가이드는 아래의 글을 참조 바랍니다.  
https://gall.dcinside.com/mgallery/board/view/?id=steamdeck&no=130911&exception_mode=recommend&page=1  

프로젝트 다운로드는 아래의 링크를 사용하면 됩니다.  
https://github.com/onion-timothy/kakao_poe_token_service/archive/refs/heads/main.zip

### NVM 설치
아래 순서에 따라 NVM을 설치합니다.

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

설치 후, `~/.bash_profile`을 열고,
```sh
sudo nano ~/.bash_profile
```

아래 내용을 추가합니다.
<a id="profile_snippet"></a>
```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
설치 이후, Konsole을 닫은 후 다시 열고 아래의 단계를 진행합니다.

### Node.JS 설치
```sh
nvm install --lts
```
설치 완료 후, 아래 명령어로 Node.JS 위치를 확인합니다.
```sh
nvm which current
```
위치를 확인 후, 아래의 단계를 진행합니다.
<a id="profile_snippet"></a>
```sh
/home/deck/.nvm/versions/node/v22.12.0/bin/node
```

### Kakao POE2 Token Service install
프로젝트를 다운로드 받은 경로로 이동합니다. `/home/deck/Downloads` 폴더에 그대로 있다면, 아래와 같습니다.
```sh
cd /home/deck/Downloads/kakao_poe_token_service-main/kakao_poe_token_service/
```
프로젝트 의존성 설치를 위해 아래의 명령어를 실행합니다. *npm* 앞 부분은 Node.JS 설치 후 확인한 경로를 사용합니다.
```sh
/home/deck/.nvm/versions/node/v22.12.0/bin/npm install
```

### 서비스 등록
Node.JS 서버가 Gamescope 세션 및 Deck 재시작 이후에도 동작하게 하기 위해 서비스 등록이 필요합니다.  
서비스는 아래의 절차를 통해 등록할 수 있습니다.  
```sh
sudo nano /etc/systemd/system/kakao_poe_token.service
```

```nano
[Unit]
Description=Kakao POE Token Service
After=network.target

[Service]
ExecStart=/home/deck/.nvm/versions/node/v22.12.0/bin/node /home/deck/Downloads/kakao_poe_token_service-main/kakao_poe_token_service/src/index.js
WorkingDirectory=/home/deck/Downloads/kakao_poe_token_service-main/kakao_poe_token_service
Restart=always
User=deck

[Install]
WantedBy=multi-user.target
```
`/home/deck/.nvm/versions/node/v22.12.0/bin/node` 은 위에서 확인한 Node.JS 실행 경로로,  
`/home/deck/Downloads/kakao_poe_token_service-main/kakao_poe_token_service` 은 프로젝트 다운로드 경로로 설정합니다.  

### Steam User 설정
프로젝트의 `/kakao_poe_token_service/src/config.json` 파일에 사용자 번호를 입력해야 합니다.  
아래의 경로로 이동하여 번호를 확인할 수 있습니다.  
```sh
cd /home/deck/.steam/steam/userdata
```
```sh
ls
```

서비스 파일 설정 이후, 아래의 명령어를 실행하여 활성화합니다.
1. 시스템 서비스 등록
```sh
sudo systemctl daemon-reload
```
2. 서비스 시작
```sh
sudo systemctl start kakao_poe_token
```
3. 자동 시작 설정
```sh
sudo systemctl enable kakao_poe_token
```
4. 서비스 상태 확인
```sh
sudo systemctl status kakao_poe_token
```
서비스가 정상적으로 구동되면 아래와 같이 표시됩니다.  
세부 내용(PID, 경로 등)은 다를 수 있으며, Active: active (running) 을 확인하면 됩니다.
```sh
● kakao_poe_token_service - Kakao POE Token Service
     Loaded: loaded (/etc/systemd/system/kakao_poe_token_service; enabled; preset: disabled)
     Active: active (running) since Mon 2024-12-16 17:16:06 KST; 3h 25min ago
   Main PID: 153007 (node)
      Tasks: 11 (limit: 17750)
     Memory: 14.6M (peak: 481.8M swap: 112.0K swap peak: 112.0K)
        CPU: 1.997s
     CGroup: /system.slice/kakao_poe_token_service
             └─153007 /home/deck/.nvm/versions/node/v22.12.0/bin/node /home/deck/WebstormProjects/kaka>

Dec 16 17:16:15 steamdeck assert_20241216171615_7.dmp[153468]: Uploading dump (out-of-process)
                                                               /tmp/dumps/assert_20241216171615_7.dmp
Dec 16 17:16:16 steamdeck assert_20241216171615_4.dmp[153462]: Finished uploading minidump (out-of-process): success = yes
Dec 16 17:16:16 steamdeck assert_20241216171615_4.dmp[153462]: response: CrashID=bp-c67703aa-f690-40ef-a8bc-291da2241216
Dec 16 17:16:16 steamdeck assert_20241216171615_4.dmp[153462]: file ''/tmp/dumps/assert_202412161716154.dmp'', upload yes: ''CrashID=bp-c67703aa-f690-40_4.dmp'', upload yes: ''CrashID=bp-c67703aa-f690-40ef-a8bc-291da2241216''
```

### Chrome Extension 설치
프로젝트의 `chrome_extension` 을 Chrome에 설치합니다.  
`chrome_extension`은 카카오 POE 2 실행 페이지의 스크립트를 교체하여, Node.JS 서버에 생성된 토큰을 전달하는 역할을 합니다.  
설치 절차는 아래와 같습니다.

1. `chrome://extensions` 실행
2. 개발자 모드 활성화
3. 압축 해제된 확장 프로그램 로드

### 사용 방법
POE2 카카오 페이지에 접속 후, 로그인 등 인증 후에 `지금 플레이` 버튼을 클릭합니다.  
동작에 성공하면 스팀이 재시작됩니다. 이후 POE2를 플레이할 수 있습니다.
