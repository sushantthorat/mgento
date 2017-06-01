---
name: Stepper
enabled: true
wrappers: container
---

<div class="stepper">
    <label class="stepper_label required" for="qty">
        <em>*</em> Quantity
    </label>

    <div class="stepper_liner">
        <button type="button" class="stepper_button stepper_button--down">Decrease quantity</button>

        <input type="text" class="input-text stepper_input" id="qty" name="qty" maxlength="12" pattern="[0-9]*" value="1">

        <button type="button" class="stepper_button stepper_button--up">Increase quantity</button>
    </div>
</div>

<br>
<br>

<div class="stepper stepper--l">
    <label class="stepper_label required" for="qty">
        <em>*</em> Quantity
    </label>

    <div class="stepper_liner">
        <button type="button" class="stepper_button stepper_button--down">Decrease quantity</button>

        <input type="text" class="input-text stepper_input" id="qty" name="qty" maxlength="12" pattern="[0-9]*" value="1">

        <button type="button" class="stepper_button stepper_button--up">Increase quantity</button>
    </div>
</div>
