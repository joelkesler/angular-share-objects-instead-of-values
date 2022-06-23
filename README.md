# Passing Objects vs Passing Values for sharing data between children and parent components in Angular

From a Vendasta internal tech demo.

When you pass an object as an input to a component, it's used as a reference/pointer to the original object. Any change you make to that object in a child component are shared between everything using that object.

If you pass in a bare value/variable (string, number, boolean, etc) then the value is duplicated, and changes made by a child component are not shared with anything else using that value/variable.

In the [Angular Email Builder](https://galaxy-sandbox.vendasta-internal.com/email-builder) I used this to keep the main email data object updated when the user edited the email.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-aqinhv)
