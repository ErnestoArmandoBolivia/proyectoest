@login @ui-tests @escenario4
Feature: Escenario 4

Scenario: Escenario 4 crear plantillas

 Given the user go to Iniciar sesion button
    And the user sets the email
    And the user set the botton Continuar
    And the user sets the password
    And the user clicks the Iniciar sesion button
    

    Given the user go to Clicvistas button
    When the user clicks the ver calendario button
    Then the user should see "Welcome" text on the header nav

  