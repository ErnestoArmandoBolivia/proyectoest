@login @ui-tests @escenario1
Feature: Escenario 1

Scenario: Escenario 1

 Given the user go to Iniciar sesion button
    And the user sets the email
    And the user set the botton Continuar
    And the user sets the password
    And the user clicks the Iniciar sesion button
    

    Given the user go to Crear button
    And the user sets the botton Crear Tablero
    And the user sets the titulo del Tablero
    When the user clicks the Crear button
    Then the user should see "Welcome" text on the header nav