@login @ui-tests @escenario3
Feature: Escenario 3

Scenario: Escenario 3 crear plantillas izquierda por defecto Lead

 Given the user go to Iniciar sesion button
    And the user sets the email
    And the user set the botton Continuar
    And the user sets the password
    And the user clicks the Iniciar sesion button
    

    Given the user go to Crear Plantilla izquierda button
    And the user sets the clic en negocio
    And the user sets the clic eleccion Lead
    And the user sets the clic utlizar plantilla Lead
    And the user clicks the Crearplantilla izquierda button
    When the user clic en cerrar anuncio
    Then the user should see "A Lead Management Pipeline by Crmble" as validation escenario tres







