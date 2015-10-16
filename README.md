# Bootstrap Confirm Plugin
Bootstrap Confirm is a jQuery plugin based on Bootstrap Modal to create a confirmation dialog system.

## API
### Usage

The plugin are triggered by `data-toggle="confirm"` attribute. Supports link redirections and form submitions.
```html
<form>
    <button class="btn btn-default" 
      data-toggle="confirm" 
      data-title="Wait!" 
      data-message="Are you sure?"
      data-type="success">
      Confirm Form Submition
    </button>
</form>

<a href="#" 
  data-toggle="confirm" 
  data-title="Wait!" 
  data-message="Are you sure?"
  data-type="danger">
  Confirm link
  </a>
```

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-title=""`.

|Name|type|default|description|
|---|---|---|---|
|title|string|'Confirm'|Represents the title of dialog modal|
|message|string|'Are your sure?'|The confirmation message|
|type|enum|success &#124; info &#124; warning &#124; danger &#124; default|Sets the colors on dialog template|
|template|html|'<div class="modal" ...'|Is the template for the dialog modal, it cam be change for diferent modal templates|

