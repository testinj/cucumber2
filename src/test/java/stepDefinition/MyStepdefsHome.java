package stepDefinition;

import Commun.Hooks;
import Pages.ConnexionPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class MyStepdefsHome extends Hooks {
    ConnexionPage Acceuil = new ConnexionPage();
    @Given("j ouvre l application practice.automationtesting")
    public void jOuvreLApplicationPracticeAutomationtesting() {
        Acceuil.VerificationAcceuil();
    }

    @When("j accede a la page My Account")
    public void jAccedeALaPageMyAccount() {
        Acceuil.PageAcceuil();
    }
}
