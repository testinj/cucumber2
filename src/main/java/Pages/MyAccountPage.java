package Pages;

import Commun.Hooks;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class MyAccountPage extends Hooks {

    String xpathVerifieDashbord = "//a[@href='https://practice.automationtesting.in/my-account/";
    String xpathMessageDashboard = "//p[1]/text()[1]";
    public void Dashbord (){
        WebElement dashbord = driver.findElement(By.xpath(xpathVerifieDashbord));
        dashbord.click();
        WebElement msgDashbord = driver.findElement(By.xpath(xpathMessageDashboard));
        msgDashbord.getText().contains("From your account dashboard you can view your");
        driver.navigate().back();

    }

}
