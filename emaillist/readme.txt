1.  backend
    1)  테스트(개발 모드)
        eclipse ctrl+f11 (스프링부트에서 애플리케이션 실행)

    2)  빌드(배포)
        # mvn -f emaillist/backend exec:exec clean package

    3)  테스트 
        # java -Dspring.profiles.active=production -jar emaillist/backend/target/emaillist.jar

2.  frontend


3-1.  deploy: ssh 연결(ssh key 인증)
1)  key 생성하기
    # ssh-keygen -t rsa -b 2048 -m PEM -C "wendy0301666@gmail.com"

2)  key 생성 확인
    - private key(개인키): ~/.ssh/id_rsa
    - public key(공개키): ~/.ssh/id_rsa.pub

3)  공개키를 서버에 설치하기
    # mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys

4)  private key 잘 저장하기

5)  접속 테스트
    # ssh -i mykey.pem root@192.168.0.175


3-2.  deploy: Publish Over SSH 플러그인(Jenkins)

1)  Publish Over SSH 플러그인 설치
2)  Dashboard > Jenkins 관리 > System
    - 실행서버(ssh server) 등록: springboot-publish-server
    - 프로젝트의 빌드 후 조치(post-build action)의 Send build artifacts over SSH 설정
        1. emaillist.jar: transfer
        2. launch.sh: transfer + execution