<template>
    <table>
            <thead>
                <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <slot></slot>
            </tbody>
    </table>
</template>

<script>
export default {
    name: 'ParamTable',
};
</script>
