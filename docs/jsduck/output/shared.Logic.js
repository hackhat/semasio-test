Ext.data.JsonP.shared_Logic({"tagname":"class","name":"shared.Logic","autodetected":{},"files":[{"filename":"Logic.js","href":"Logic.html#shared-Logic"}],"params":[{"tagname":"params","type":"Number[]","name":"numbers","doc":"\n","html_type":"Number[]"}],"members":[{"name":"__numbers","tagname":"property","owner":"shared.Logic","id":"property-__numbers","meta":{"private":true}},{"name":"__validOutputs","tagname":"property","owner":"shared.Logic","id":"property-__validOutputs","meta":{"private":true}},{"name":"__addValidOutput","tagname":"method","owner":"shared.Logic","id":"method-__addValidOutput","meta":{"private":true}},{"name":"__isValidOutput","tagname":"method","owner":"shared.Logic","id":"method-__isValidOutput","meta":{"private":true}},{"name":"__permute","tagname":"method","owner":"shared.Logic","id":"method-__permute","meta":{"private":true}},{"name":"calculate","tagname":"method","owner":"shared.Logic","id":"method-calculate","meta":{}},{"name":"setNumbers","tagname":"method","owner":"shared.Logic","id":"method-setNumbers","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-shared.Logic","short_doc":"Returns the greatest product of 2 numbers from the array that\nare multiples of 3. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Logic.html#shared-Logic' target='_blank'>Logic.js</a></div></pre><div class='doc-contents'><p>Returns the greatest product of 2 numbers from the array that\nare multiples of 3.</p>\n\n<p><strong>How to use?</strong>\nMake a new instance:</p>\n\n<pre><code>var logic = new Logic([1, 2, 3, 4, 5, 6]);\n</code></pre>\n\n<p>And then calculate the value:</p>\n\n<pre><code>logic.calculate(); // Returns `30`;\n</code></pre>\n\n<p>You can even change the initial numbers:</p>\n\n<pre><code>logic.setNumbers([1, 2, 3]);\n</code></pre>\n\n<p>And calculate again:</p>\n\n<pre><code>logic.calculate(); // Returns `6`;\n</code></pre>\n\n<p><strong>Why a class and not a nested function?</strong>\nUsing a class is better because we don't need to make complex, nested\nhard to test functions. Also the function is more efficient and uses less memory\nbecause doesn't create a new function each time you need to calculate a new value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>numbers</span> : Number[]<div class='sub-desc'>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-__numbers' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shared.Logic'>shared.Logic</span><br/><a href='source/Logic.html#shared-Logic-property-__numbers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shared.Logic-property-__numbers' class='name expandable'>__numbers</a> : Number[]<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Contains the initial numbers.</p>\n</div><div class='long'><p>Contains the initial numbers.</p>\n</div></div></div><div id='property-__validOutputs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shared.Logic'>shared.Logic</span><br/><a href='source/Logic.html#shared-Logic-property-__validOutputs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shared.Logic-property-__validOutputs' class='name expandable'>__validOutputs</a> : Number[]<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Stores the valid outputs. ...</div><div class='long'><p>Stores the valid outputs.</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-__addValidOutput' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shared.Logic'>shared.Logic</span><br/><a href='source/Logic.html#shared-Logic-method-__addValidOutput' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shared.Logic-method-__addValidOutput' class='name expandable'>__addValidOutput</a>( <span class='pre'>validOutput</span> ) : [type]<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Adds a valid output to the set. ...</div><div class='long'><p>Adds a valid output to the set.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>validOutput</span> : [type]<div class='sub-desc'><p>[description]</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>[type]</span><div class='sub-desc'><p>[description]</p>\n</div></li></ul></div></div></div><div id='method-__isValidOutput' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shared.Logic'>shared.Logic</span><br/><a href='source/Logic.html#shared-Logic-method-__isValidOutput' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shared.Logic-method-__isValidOutput' class='name expandable'>__isValidOutput</a>( <span class='pre'>output</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Checks whenever is a valid output or not. ...</div><div class='long'><p>Checks whenever is a valid output or not.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>output</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Returns true if is a valid output, false if is not valid.</p>\n</div></li></ul></div></div></div><div id='method-__permute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shared.Logic'>shared.Logic</span><br/><a href='source/Logic.html#shared-Logic-method-__permute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shared.Logic-method-__permute' class='name expandable'>__permute</a>( <span class='pre'>numbers</span> ) : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Makes a single permutation and it will call itself. ...</div><div class='long'><p>Makes a single permutation and it will call itself.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>numbers</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-calculate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shared.Logic'>shared.Logic</span><br/><a href='source/Logic.html#shared-Logic-method-calculate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shared.Logic-method-calculate' class='name expandable'>calculate</a>( <span class='pre'>numbers</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the greatest product of 2 numbers from the array that\nare multiples of 3. ...</div><div class='long'><p>Returns the greatest product of 2 numbers from the array that\nare multiples of 3.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>numbers</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setNumbers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shared.Logic'>shared.Logic</span><br/><a href='source/Logic.html#shared-Logic-method-setNumbers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shared.Logic-method-setNumbers' class='name expandable'>setNumbers</a>( <span class='pre'>numbers</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Overrides the initial numbers. ...</div><div class='long'><p>Overrides the initial numbers.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>numbers</span> : Number[]<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});