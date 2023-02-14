package Pages;

import Commun.Hooks;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.security.PublicKey;

public class ConnexionPage extends Hooks {
    String xpathPageAceuil = "//div[@class='col4-2 sub_column sub_column_1-0-1-1 sub_column_post_22']";
    String xpathbtnAcceuil = "//a[@href='https://practice.automationtesting.in/my-account/']";
    String xpathBoutonLogin = "//input[@class='woocommerce-Button button']";
    String xpathmsgConnexion = "//a[@href='https://practice.automationtesting.in/my-account/']";


    public void VerificationAcceuil(){
        super.monTest();
       WebElement Acceuil = driver.findElement(By.xpath("//div[@class='col4-2 sub_column sub_column_1-0-1-1 sub_column_post_22']"));
       Assert.assertTrue(Acceuil.isDisplayed());
       System.out.println("Ouverture application");
    }

  public void PageAcceuil(){
        WebElement BoutonPageAcceuil = driver.findElement(By.xpath(xpathbtnAcceuil));
        BoutonPageAcceuil.click();
  }

  public void SaisirLogin(String login){
        WebElement Login = driver.findElement(By.id("username"));
        Login.sendKeys(login);
  }

  public void saisirMotDePass(String MDP){
        WebElement MotDePasse = driver.findElement(By.id("password"));
        MotDePasse.sendKeys(MDP);
  }
  public void ClickBoutonLogin(){
        WebElement BoutonLogin = driver.findElement(By.xpath(xpathBoutonLogin));
        BoutonLogin.click();
  }
  public void AffichDashbord(){
        WebElement msgConnexion = driver.findElement(By.xpath(xpathmsgConnexion));
        Assert.assertTrue(msgConnexion.isDisplayed());
  }
  // ajouter message false
public void connexionko(){
        WebElement messageConnexionko = driver.findElement(By.className("woocommerce-error"));
    Assert.assertTrue(messageConnexionko.isDisplayed());
    System.out.println("mot de passe est incorrect");

}

}
