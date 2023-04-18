
@login @ui-tests @escenario5
Feature: Escenario 5

Scenario: Escenario 6 cambiar el tema para volverlo a tema original

 Given the user go to Iniciar sesion button
    And the user sets the email
    And the user set the botton Continuar
    And the user sets the password
    And the user clicks the Iniciar sesion button
    

    Given the user go to cambio de tema button
    When the user clicks volver a original button
    Then the user should see "Welcome" text on the header nav

