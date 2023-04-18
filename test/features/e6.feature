@login @ui-tests @escenario6
Feature: Escenario 6

Scenario: Escenario 6 er los miembros desde arriba e ir a miembros pendientes

 Given the user go to Iniciar sesion button
    And the user sets the email
    And the user set the botton Continuar
    And the user sets the password
    And the user clicks the Iniciar sesion button
    

    Given the user go to miembros button
    When the user clicks the invitados button
    Then the user should see "Invitados" as validation escenario seis


