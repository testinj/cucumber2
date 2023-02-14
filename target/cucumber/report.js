$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ConnexionKo.feature");
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