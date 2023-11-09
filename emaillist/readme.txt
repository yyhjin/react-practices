1.  backend
    1)  테스트(개발 모드)
        eclipse ctrl+f11 (스프링부트에서 애플리케이션 실행)

    2)  빌드(배포)
        # mvn -f emaillist/backend exec:exec clean package

    3)  테스트 
        # java -Dspring.profiles.active=production -jar emaillist/backend/target/emaillist.jar