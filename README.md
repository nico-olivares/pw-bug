# pw-bug

A simple test to demonstrate a bug introduced in v1.40

If you run the test in headless mode the test will pass.

The bug happens when running the test in debug mode. In this case the test will fail.
The .fill() action is filling the text once when in headless mode (as it should), but it is entering twice in debug mode.
In this test we fill 'text' into a username field and instead the field is filled with 'texttext'.