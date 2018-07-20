<template>
   <div class="content">
        <ul>
            <li v-for='item in homelist' :key='item.id'>
                {{item.title}}
            </li>
        </ul>
   </div>
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>
