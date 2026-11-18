@cart
Feature: Add To Cart

  @smoke
  Scenario: Add product to cart

    Given user open saucedemo website
    When user login with "standard_user" and "secret_sauce"
    And user add product to cart
    Then cart count should increase