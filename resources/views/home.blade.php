@extends('layouts.app')

@section('content')
<div class="container" id="app">
    <create-component v-if="routeIs('create')"></create-component>
    <edit-component v-if="routeIs('edit')"></edit-component>
    <data-component v-if="routeIs('data')"></data-component>
</div>
@endsection

@push('scripts')
<script>
    window.onload = function () {
        const app = new Vue({
            el: '#app',
            methods: {
                routeIs(name) {
                    return window.location.pathname.includes(name);
                }
            }
        });
    }
</script>
@endpush
