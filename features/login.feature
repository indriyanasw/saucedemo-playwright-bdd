@login
Feature: Login Feature

  @smoke
  Scenario Outline: Login with valid users

    Given user open saucedemo website
    When user login with "<username>" and "<password>"
    Then user should see product page

    Examples:
      | username        | password      |
      | standard_user   | secret_sauce  |
      | problem_user    | secret_sauce  |


  @slow
  Scenario: Login with performance glitch user

    Given user open saucedemo website
    When user login with "performance_glitch_user" and "secret_sauce"
    Then user should see product page


  @negative
  Scenario Outline: Login with invalid credentials

    Given user open saucedemo website
    When user login with "<username>" and "<password>"
    Then error message should be displayed

    Examples:
      | username      | password      |
      | wrong_user    | secret_sauce  |
      | standard_user | wrong_pass    |
      | test123       | test123       |
