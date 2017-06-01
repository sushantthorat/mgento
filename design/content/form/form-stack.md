---
name: Form (--stack)
enabled: true
wrappers: container
---

<form class="form--stack" action="#" method="post">
    <div class="fieldset">
        <h2 class="legend">Fieldset</h2>

        <ul class="form-list">
            <li>
                <label for="form-1">Text</label>

                <div class="input-box">
                    <input type="text" id="form-1" name="form-1" class="input-text">
                </div>
            </li>

            <li>
                <label for="form-1a">Text S</label>

                <div class="input-box">
                    <input type="text" id="form-1a" name="form-1a" class="input-text input-text--s">
                </div>
            </li>

            <li>
                <label for="form-1b">Text XS</label>

                <div class="input-box">
                    <input type="text" id="form-1b" name="form-1b" class="input-text input-text--xs">
                </div>
            </li>

            <li>
                <label for="form-1c">Text XXS</label>

                <div class="input-box">
                    <input type="text" id="form-1c" name="form-1c" class="input-text input-text--xxs">
                </div>
            </li>

            <li>
                <label for="form-2" class="required"><em>*</em>Text Is Required</label>

                <div class="input-box">
                    <input type="text" id="form-2" name="form-2" class="input-text required-entry">
                </div>
            </li>

            <li>
                <label for="form-3" class="required"><em>*</em>Text With Hint</label>

                <div class="input-box">
                    <input type="text" id="form-3" name="form-3" class="input-text required-entry">

                    <div class="input-hint">This is a hint</div>
                </div>
            </li>

            <li>
                <label for="form-4" class="required"><em>*</em>Text With Placeholder</label>

                <div class="input-box">
                    <input type="text" id="form-4" name="form-4" placeholder="Frodo Baggins" class="input-text required-entry">
                </div>
            </li>

            <li>
                <label for="form-5" class="required"><em>*</em>Text with Error</label>

                <div class="input-box">
                    <input type="text" id="form-5" name="form-5" class="input-text required-entry validation-failed">
                    <div class="validation-advice">This is a required field.</div>
                </div>
            </li>

            <li>
                <label for="form-6" class="required"><em>*</em>Email</label>

                <div class="input-box">
                    <input type="email" id="form-6" name="form-6" class="input-text validate-email required-entry">
                </div>
            </li>

            <li>
                <label for="form-7" class="required"><em>*</em>Password</label>

                <div class="input-box">
                    <input type="password" id="form-7" name="form-7" class="input-text required-entry validate-password">
                </div>
            </li>

            <li>
                <label for="form-8" class="required"><em>*</em>Textarea</label>

                <div class="input-box">
                    <textarea id="form-8" name="form-8" class="input-text required-entry"></textarea>
                </div>
            </li>
        </ul>
    </div>

    <div class="fieldset">
        <h2 class="legend">Fieldset with ".fields" Structure</h2>

        <ul class="form-list">
            <li class="fields">
                <div class="field">
                    <label for="form-9" class="required"><em>*</em>First Field</label>

                    <div class="input-box">
                        <input type="text" id="form-9" name="form-9" class="input-text required-entry">
                    </div>
                </div>

                <div class="field">
                    <label for="form-10" class="required"><em>*</em>Second Field</label>

                    <div class="input-box">
                        <input type="text" id="form-10" name="form-10" class="input-text required-entry">
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <div class="fieldset">
        <h2 class="legend">Select Inputs</h2>

        <ul class="form-list">
            <li>
                <label for="form-11" class="required"><em>*</em>Select</label>

                <div class="input-box">
                    <div class="gravdept-select">
                        <select id="form-11" name="form-11" class="validate-select required-entry" defaultvalue="4">
                            <option value="">Select...</option>
                            <option value="1">Apples</option>
                            <option value="2">Oranges</option>
                            <option value="3">Bananas</option>
                        </select>
                    </div>
                </div>
            </li>

            <li class="wide">
                <label for="form-12">Select from your address book or create a new address</label>

                <div class="input-box">
                    <div class="gravdept-select">
                        <select id="form-12" name="form-12" class="address-select">
                            <option value="1" selected>Brendan Falkowski, 45 Sunset Way, Los Angeles, California 90210, United States</option>
                            <option value="">New Address</option>
                        </select>
                    </div>
                </div>
            </li>

            <li>
                <label for="form-13">Multi Select</label>

                <div class="input-box">
                    <select id="form-13" name="form-13" class="required-entry multiselect" multiple="multiple" size="5">
                        <option value="1">First option</option>
                        <option value="2">Second option</option>
                        <option value="3">Third option</option>
                        <option value="4">Fourth option</option>
                        <option value="5">Fifth option</option>
                        <option value="6">An extremely long option to test what happens if something this large is ever in a select menu</option>
                    </select>
                </div>
            </li>
        </ul>
    </div>

    <div class="fieldset">
        <h2 class="legend">Checkboxes</h2>

        <ul class="form-list">
            <li class="control">
                <input type="checkbox" id="form-14" name="form-14" value="14">
                <label for="form-14">A stand-alone checkbox</label>
            </li>

            <li class="control">
                <input type="checkbox" id="form-15" name="form-15" value="15">
                <label for="form-15">A stand-alone checkbox with a really long label that wraps around to a second line without breaking the layout.</label>
            </li>

            <li class="controls">
                <div class="control">
                    <input type="checkbox" id="form-16a" name="form-16a" value="form-16a">
                    <label for="form-16a">The first in a set of checkboxes</label>
                </div>

                <div class="control">
                    <input type="checkbox" id="form-16b" name="form-16b" value="form-16b">
                    <label for="form-16b">The second in a set of checkboxes</label>
                </div>

                <div class="control">
                    <input type="checkbox" id="form-16c" name="form-16c" value="form-16c">
                    <label for="form-16c">The third in a set of checkboxes</label>
                </div>
            </li>

            <li class="controls">
                <div class="controls_title">
                    Title for checkbox group
                </div>

                <div class="control">
                    <input type="checkbox" id="form-17a" name="form-17a" value="form-17a">
                    <label for="form-17a">The first in a set of checkboxes</label>
                </div>

                <div class="control">
                    <input type="checkbox" id="form-17b" name="form-17b" value="form-17b">
                    <label for="form-17b">The second in a set of checkboxes</label>
                </div>

                <div class="control">
                    <input type="checkbox" id="form-17c" name="form-17c" value="form-17c">
                    <label for="form-17c">The third in a set of checkboxes</label>
                </div>
            </li>

            <li class="control">
                <input type="checkbox" id="form-18" name="form-18" value="18">

                <label for="form-18">
                    A stand-alone checkbox
                    <div class="control_hint">With some hint text.</div>
                </label>
            </li>
        </ul>
    </div>

    <div class="fieldset">
        <h2 class="legend">Radio Buttons</h2>

        <ul class="form-list">
            <li class="control">
                <input type="radio" id="form-19" name="form-19" value="19" checked>
                <label for="form-19">A stand-alone radio</label>
            </li>

            <li class="control">
                <input type="radio" id="form-20" name="form-20" value="20">
                <label for="form-20">A stand-alone radio with a really long label that wraps around to a second line without breaking the layout.</label>
            </li>

            <li class="controls">
                <div class="control">
                    <input type="radio" id="form-21a" name="form-21" value="form-21a" checked>
                    <label for="form-21a">The first in a set of radio buttons</label>
                </div>

                <div class="control">
                    <input type="radio" id="form-21b" name="form-21" value="form-21b">
                    <label for="form-21b">The second in a set of radio buttons, which has a very long label that wraps around to a second line without breaking the layout.</label>
                </div>

                <div class="control">
                    <input type="radio" id="form-21c" name="form-21" value="form-21c">
                    <label for="form-21c">The third in a set of radio buttons</label>
                </div>
            </li>

            <li class="controls">
                <div class="controls_title required">
                    <em>*</em> Title for radio group
                </div>

                <div class="control">
                    <input type="radio" id="form-22a" name="form-22" value="form-22a" checked>
                    <label for="form-22a">The first in a set of radio buttons</label>
                </div>

                <div class="control">
                    <input type="radio" id="form-22b" name="form-22" value="form-22b">
                    <label for="form-22b">The second in a set of radio buttons, which has a very long label that wraps around to a second line without breaking the layout.</label>
                </div>

                <div class="control">
                    <input type="radio" id="form-22c" name="form-22" value="form-22c">
                    <label for="form-22c">The third in a set of radio buttons</label>
                </div>
            </li>

            <li class="control">
                <input type="radio" id="form-23" name="form-23" value="23">

                <label for="form-23">
                    A stand-alone radio buttton
                    <div class="control_hint">With some hint text.</div>
                </label>
            </li>
        </ul>
    </div>

    <div class="fieldset">
        <h2 class="legend">Adjacent Inputs (v-fix)</h2>

        <ul class="form-list">
            <li>
                <label for="form-24">Label</label>

                <div class="input-box">
                    <div class="v-fix">
                        <input type="text" class="input-text input-text--xxs" id="form-24" name="form-24">
                    </div>

                    <div class="v-fix">
                        <input type="text" class="input-text input-text--xxs" id="form-24a" name="form-24a">
                    </div>
                </div>
            </li>

            <li>
                <label for="form-25">Label</label>

                <div class="input-box">
                    <div class="v-fix">
                        <div class="gravdept-select gravdept-select--xs gravdept-select--inline">
                            <select id="form-25" name="form-25">
                                <option value="">Select...</option>
                                <option value="1">Apples</option>
                                <option value="2">Oranges</option>
                                <option value="3">Bananas</option>
                            </select>
                        </div>
                    </div>

                    <div class="v-fix">
                        <div class="gravdept-select gravdept-select--xs gravdept-select--inline">
                            <select id="form-25a" name="form-25a">
                                <option value="">Select...</option>
                                <option value="1">Apples</option>
                                <option value="2">Oranges</option>
                                <option value="3">Bananas</option>
                            </select>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <div class="fieldset">
        <h2 class="legend">Form Buttons</h2>

        <ul class="form-list">
            <li>
                <label for="form-26">Text</label>

                <div class="input-box">
                    <input type="text" id="form-26" name="form-26" class="input-text">
                </div>
            </li>
        </ul>

        <div class="form-buttons">
            <button type="submit" class="button">Submit</button>
        </div>
    </div>
</form>
