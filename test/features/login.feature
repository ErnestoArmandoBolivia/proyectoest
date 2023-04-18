@login @ui-tests @Armando
Feature: Login into Trello Web Page

Scenario: Trello Login
    Given the user go to Iniciar sesion button
    And the user sets the email
    And the user set the botton Continuar
    And the user sets the password
    When the user clicks the Iniciar sesion button
    Then the user should see "Welcome" text on the header nav
