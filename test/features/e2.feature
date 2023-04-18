@login @ui-tests @escenario2
Feature: Escenario 2

Scenario: Escenario 2 crear plantillas

 Given the user go to Iniciar sesion button
    And the user sets the email
    And the user set the botton Continuar
    And the user sets the password
    And the user clicks the Iniciar sesion button
    

    Given the user go to Plantilla button
    And the user sets the botton 1 on 1 Meeting agenda
    When the user clicks the Crearplantilla button
    Then the user should see "1-on-1 Meeting Agenda" as validation escenario dos