package stepDefinition;

import Commun.Hooks;
import Pages.ConnexionPage;
import Pages.MyAccountPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class MyStepdefsConnexion extends Hooks {
    ConnexionPage Connexion = new ConnexionPage();
    MyAccountPage VerifDashboard = new MyAccountPage();
    @And("je saisis le login {string}")
    public void jeSaisisLeLogin(String login) {
        Connexion.SaisirLogin(login);

    }

    @And("je saisis le mot de passe {string}")
    public void jeSaisisLeMotDePasse(String MDP) {
        Connexion.saisirMotDePass(MDP);

    }

    @And("je clique sur login")
    public void jeCliqueSurLogin() {
        Connexion.ClickBoutonLogin();

    }

    @Then("je me connecte et la page Dashboard s affiche")
    public void jeMeConnecteEtLaPageDashboardSAffiche() {
       Connexion.AffichDashbord();

    }

    @Then("il m affiche un message d'erreur")
    public void ilMAfficheUnMessageDErreur() {
        Connexion.connexionko();
    }
}
