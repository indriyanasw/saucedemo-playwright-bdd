@logout
Feature: Logout
  @smoke
  Scenario: Logout from application
    Given user login successfully
    When user click logout
    Then user redirected to login page