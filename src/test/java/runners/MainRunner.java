package runners;

import Commun.Hooks;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import java.io.IOException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;


@RunWith(Cucumber.class)
@CucumberOptions(
        tags={"@TEST_POE1-25"},
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json","junit:target/surefire-reports/cucumber.xml"},
        features = {"src/test/resources/features"},
        glue ={"stepDefinition"}
)
public class MainRunner extends Hooks {
   /*  @AfterClass
    public static void monAfter() throws NoSuchAlgorithmException, KeyStoreException, IOException, InterruptedException, KeyManagementException {
         ImportResultToxray res = new ImportResultToxray();
         res.RemonteResultats();
         System.out.println("Import all Test");
    }*/
}


