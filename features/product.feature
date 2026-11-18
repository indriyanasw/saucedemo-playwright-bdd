@product
Feature: Product Page

  @smoke
  Scenario: Verify product list displayed

    Given user open saucedemo website
    When user login with "standard_user" and "secret_sauce"
    Then product list should be visible