# Kakao POE2 Token Service for Steam Deck

Node.JS를 사용한 Kakao POE2 토큰 설정 서비스입니다.
크롬 익스텐션에서 API를 호출하면, LaunchOptions를 수정하고 스팀을 재시작합니다.

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

### NodeJS 설치
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

