---
name: Scroll X
description: >
    Enable dense tables that cannot compress on small screens to overflow the `scroll-x` wrapper horizontally.
    The breakpoint where tables become scrollable is defined in the `data-scroll-x` attribute per table.

    JS will create another attribute `data-scroll-x` and toggle the value `scroll` or empty using Enquire JS at the defined breakpoint.
enabled: true
wrappers: container
---

<div class="scroll-x" data-scroll-x="600">
    <div class="scroll-x_liner">
        <table class="table">
            <thead>
                <tr>
                    <th>Order #</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Number</th>
                    <th>Label</th>
                    <th>Label</th>
                    <th>Label</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>100000133</td>
                    <td>$2,950.75</td>
                    <td>Complete</td>
                    <td>9876</td>
                    <td>Something something</td>
                    <td>Something something</td>
                    <td>Something something</td>
                </tr>

                <tr>
                    <td>100000131</td>
                    <td>$80.76</td>
                    <td>Pending</td>
                    <td>9876</td>
                    <td>Something something</td>
                    <td>Something something</td>
                    <td>Something something</td>
                </tr>

                <tr>
                    <td>100000108</td>
                    <td>$62.51</td>
                    <td>Pending</td>
                    <td>9876</td>
                    <td>Something something</td>
                    <td>Something something</td>
                    <td>Something something</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
