---
name: Table (--zebra-dark)
description: >
    ## Modifier

    Add stripes to even/odd `<tbody>` rows with dark odd rows.
enabled: true
wrappers: container
---

<table class="table table--zebra-dark">
    <thead>
        <tr>
            <th>Order #</th>
            <th>Total</th>
            <th>Status</th>
        </tr>
    </thead>

    <tfoot>
        <tr>
            <td colspan="3"><a href="#" class="button button--xs button--subtle">Some Action</a></td>
        </tr>
    </tfoot>

    <tbody>
        <tr>
            <td>100000133</td>
            <td><span class="price">$2,950.75</span></td>
            <td>Complete</td>
        </tr>

        <tr>
            <td>100000131</td>
            <td><span class="price">$80.76</span></td>
            <td>Pending</td>
        </tr>

        <tr>
            <td>100000108</td>
            <td><span class="price">$62.51</span></td>
            <td>Pending</td>
        </tr>
    </tbody>
</table>
