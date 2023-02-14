@REQ_POE1-10
Feature: Us2_connexion à un compte
	#En tant qu'Utilisateur Je souhaite Me connecter à mon compte Afin de Gérer mes commandes et mes informations personnelles
	#Règles de gestion :
	#RG1 : Dans l'espace ""My Account"" un pavé ""Login"" permet de saisir son login et son mot de passe et de
	#valider avec un bouton ""LOGIN""
	#RG2 : En se connectant à son compte l'écran ""Dashboard"" doit s'afficher, et des liens renvoyant aux pages
	#suivantes sont présentes : Dashboard, Orders, Download, Adresses, Account Details, Logout
	#RG3 : En cas de connexion avec un mot de passe erroné, un message ""ERROR: The password you entered for the
	#username ""Email"" incorrect s'affiche
	#RG4 : Une case à cocher ""Remember me"" permet de garder son login pré-rempli à la prochaine connexion

	#Ce cas de test permet de vérifier si la connexion avec un login et mot de passe redirige à la page d’accueil
  @TEST_POE1-22 @TESTSET_POE1-42 @Groupe1 @TestTNR
  Scenario Outline: Connexion OK au compte client
    Given j ouvre l application practice.automationtesting
    When j accede a la page My Account
    And je saisis le login "<login>"
    And je saisis le mot de passe "<password>"
    And je clique sur login
    Then je me connecte et la page Dashboard s affiche

    Examples:
      | login                      | password          |
      |      Softeam20@yopmail.com |   Softeam@1      |
