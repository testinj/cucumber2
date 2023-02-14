$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Connexion.feature");
formatter.feature({
  "name": "Us2_connexion à un compte",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@REQ_POE1-10"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Connexion OK au compte client",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TEST_POE1-22"
    },
    {
      "name": "@TESTSET_POE1-42"
    },
    {
      "name": "@Groupe1"
    },
    {
      "name": "@TestTNR"
    }
  ]
});
formatter.step({
  "name": "j ouvre l application practice.automationtesting",
  "keyword": "Given "
});
formatter.step({
  "name": "j accede a la page My Account",
  "keyword": "When "
});
formatter.step({
  "name": "je saisis le login \"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "je saisis le mot de passe \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "je clique sur login",
  "keyword": "And "
});
formatter.step({
  "name": "je me connecte et la page Dashboard s affiche",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "login",
        "password"
      ]
    },
    {
      "cells": [
        "Softeam20@yopmail.com",
        "Softeam@1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Connexion OK au compte client",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@REQ_POE1-10"
    },
    {
      "name": "@TEST_POE1-22"
    },
    {
      "name": "@TESTSET_POE1-42"
    },
    {
      "name": "@Groupe1"
    },
    {
      "name": "@TestTNR"
    }
  ]
});
formatter.step({
  "name": "j ouvre l application practice.automationtesting",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefsHome.jOuvreLApplicationPracticeAutomationtesting()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "j accede a la page My Account",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefsHome.jAccedeALaPageMyAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je saisis le login \"Softeam20@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefsConnexion.jeSaisisLeLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je saisis le mot de passe \"Softeam@1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefsConnexion.jeSaisisLeMotDePasse(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je clique sur login",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefsConnexion.jeCliqueSurLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je me connecte et la page Dashboard s affiche",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefsConnexion.jeMeConnecteEtLaPageDashboardSAffiche()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href \u003d\u0027https://practice.automationtesting.in/my-account/customer-logout/\u0027]\"}\n  (Session info: chrome\u003d110.0.5481.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SELATRACH\u0027, ip: \u0027192.168.1.39\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.18\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.97, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\selat\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57311}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cfb2a51edbc6e10b0db9b6e0bfe1b1cf\n*** Element info: {Using\u003dxpath, value\u003d//a[@href \u003d\u0027https://practice.automationtesting.in/my-account/customer-logout/\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Pages.ConnexionPage.AffichDashbord(ConnexionPage.java:43)\r\n\tat stepDefinition.MyStepdefsConnexion.jeMeConnecteEtLaPageDashboardSAffiche(MyStepdefsConnexion.java:32)\r\n\tat ✽.je me connecte et la page Dashboard s affiche(file:src/test/resources/features/Connexion.feature:21)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/ConnexionKo.feature");
formatter.feature({
  "name": "Us2_connexion à un compte",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@REQ_POE1-10"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Connexion KO à un compte client",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TEST_POE1-25"
    },
    {
      "name": "@TESTSET_POE1-42"
    },
    {
      "name": "@Groupe1"
    },
    {
      "name": "@TestTNR"
    }
  ]
});
formatter.step({
  "name": "j ouvre l application practice.automationtesting",
  "keyword": "Given "
});
formatter.step({
  "name": "j accede a la page My Account",
  "keyword": "When "
});
formatter.step({
  "name": "je saisis le login \"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "je saisis le mot de passe \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "je clique sur login",
  "keyword": "And "
});
formatter.step({
  "name": "il m affiche un message d\u0027erreur",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "login",
        "password"
      ]
    },
    {
      "cells": [
        "Softeam21@yopmail.com",
        "Softeam@3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Connexion KO à un compte client",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@REQ_POE1-10"
    },
    {
      "name": "@TEST_POE1-25"
    },
    {
      "name": "@TESTSET_POE1-42"
    },
    {
      "name": "@Groupe1"
    },
    {
      "name": "@TestTNR"
    }
  ]
});
formatter.step({
  "name": "j ouvre l application practice.automationtesting",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefsHome.jOuvreLApplicationPracticeAutomationtesting()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "j accede a la page My Account",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefsHome.jAccedeALaPageMyAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je saisis le login \"Softeam21@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefsConnexion.jeSaisisLeLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je saisis le mot de passe \"Softeam@3\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefsConnexion.jeSaisisLeMotDePasse(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je clique sur login",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefsConnexion.jeCliqueSurLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "il m affiche un message d\u0027erreur",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefsConnexion.ilMAfficheUnMessageDErreur()"
});
formatter.result({
  "status": "passed"
});
});