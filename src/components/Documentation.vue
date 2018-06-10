<template>
    <div class="columns">
        <div class="column is-3">
            <h1 class="title">Documentation</h1>
            <nav aria-label="breadcrumbs" class="breadcrumb">
                <ul>
                    <li>
                        <router-link to="/">Reaction Role</router-link>
                    </li>
                    <li class="is-active">
                        <router-link to="/documentation">Documentation</router-link>
                    </li>
                </ul>
            </nav>
            <aside class="menu">
                <p class="menu-label">
                    Commands
                </p>
                <ul class="menu-list">
                    <li>
                        <a>Message Embed</a>
                        <ul>
                            <li><a href="#test">Create Embed</a></li>
                            <li><a>Edit Embed</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>Reaction Role</a>
                        <ul>
                            <li><a>Create Reaction Role</a></li>
                            <li><a>Delete Reaction Role</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
        <div class="column">
            <div class="box">
                <div class="content">
                    <h1>Some Text Here</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et nisl in nisl tincidunt ultricies semper nec metus. Duis quam enim, condimentum sit amet elit ut, tincidunt maximus urna. In ac eleifend mauris. Suspendisse a nulla quis erat dictum ultricies. Vivamus efficitur tellus ut sagittis blandit. Aliquam at vestibulum nisi, ut sollicitudin sapien. Nulla facilisi. Fusce libero massa, consequat vitae arcu vulputate, euismod bibendum risus. Phasellus ac metus in lectus pulvinar hendrerit non at orci. Nulla eleifend viverra erat, id placerat est volutpat ac. Aenean et metus lectus. Etiam ut dolor vitae libero lobortis ultricies. Etiam lacinia, lectus eu iaculis fermentum, urna orci malesuada ligula, non ultrices leo nisi ut enim. Nullam ullamcorper velit quis placerat egestas.

Phasellus elementum laoreet risus, at cursus nisl suscipit dapibus. Vestibulum egestas convallis arcu dignissim scelerisque. Maecenas tristique mauris id viverra molestie. Aliquam lacinia justo eget ipsum lacinia, eget aliquam ex faucibus. Phasellus porttitor neque ut quam congue, in pulvinar enim malesuada. Aliquam finibus lorem sit amet justo imperdiet blandit. Integer arcu leo, ultricies eu nunc non, hendrerit rutrum orci. Aenean pretium ultricies sapien. Suspendisse dictum lectus a feugiat vehicula. In hac habitasse platea dictumst. Vestibulum ullamcorper maximus justo. Vivamus luctus ipsum libero, non placerat nibh pellentesque eu. Sed at gravida tellus. Integer porta ante non lacus malesuada, et pharetra purus posuere. Sed pellentesque tincidunt est quis ornare. Fusce pulvinar, velit pellentesque blandit maximus, enim enim pretium erat, eu volutpat nisl turpis gravida est.

Maecenas interdum mollis tincidunt. Aenean sit amet luctus turpis. Integer ornare fermentum ex in lacinia. Aenean nulla mauris, posuere at nulla non, molestie vehicula ipsum. Donec aliquet mauris et sem vulputate pretium. In pellentesque tellus maximus ipsum euismod, vitae rhoncus dui pulvinar. Etiam rhoncus, magna in aliquet rhoncus, tortor urna tempus mauris, nec posuere lectus velit a nulla.

Quisque condimentum porttitor dui ac egestas. Donec eleifend, urna vitae fermentum tincidunt, ante urna sodales tellus, id tincidunt arcu urna ac felis. Aliquam blandit tempus nisl nec congue. Donec molestie elit id lobortis porttitor. Fusce ut erat nec quam dapibus tincidunt vel eget arcu. Maecenas libero tellus, tincidunt sit amet felis at, interdum pretium felis. Mauris ut eros a metus ultrices iaculis at ut lacus. Vestibulum eget metus libero. Quisque ullamcorper id turpis vel sodales. Quisque sit amet augue finibus sapien interdum efficitur.

                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Documentation',
};
</script>
