@checkout
Feature: Checkout Flow

  @smoke
  Scenario: Checkout with valid data

    Given user open saucedemo website
    When user login with "standard_user" and "secret_sauce"
    And user add product to cart
    And user open cart page
    And user perform checkout
    Then order should be successful


  @negative
  Scenario: Checkout without data

    Given user open saucedemo website
    When user login with "standard_user" and "secret_sauce"
    And user add product to cart
    And user open cart page
    And user checkout without filling data
    Then error should appear