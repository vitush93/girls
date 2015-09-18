var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["detail"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <tr>\n                <td><div class=\"checkbox\"></div></td>\n                <td>"
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</td>\n                <td>"
    + alias3(((helper = (helper = helpers.record || (depth0 != null ? depth0.record : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"record","hash":{},"data":data}) : helper)))
    + "</td>\n            </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"large-12 columns\">\n\n    <div class=\"card record\" id=\"detail\">\n\n        <a href=\"\" class=\"input\">delete</a>\n        <a href=\"\" class=\"input\">edit</a>\n\n\n        <span class=\"record-title\">"
    + this.escapeExpression(((helper = (helper = helpers.girl || (depth0 != null ? depth0.girl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"girl","hash":{},"data":data}) : helper)))
    + "</span>\n\n        <table>\n\n            <tr>\n                <th><div class=\"checkbox\"></div></th>\n                <th>Date</th>\n                <th>Record</th>\n            </tr>\n\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.records : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </table>\n\n    </div>\n\n</div>\n";
},"useData":true});

this["App"]["Templates"]["records"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "\n    <div class=\"large-12 columns date-title\">There are no records..</div>\n\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n    <div class=\"large-12 columns date-title\">Today</div>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.records : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"large-6 medium-6 small-12 columns\">\n        <div class=\"card record\">\n            <a href=\"/records/"
    + alias3(((helper = (helper = helpers.girl || (depth0 != null ? depth0.girl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"girl","hash":{},"data":data}) : helper)))
    + "\" class=\"record-container js-navigation\">\n                <span class=\"record-title\">"
    + alias3(((helper = (helper = helpers.girl || (depth0 != null ? depth0.girl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"girl","hash":{},"data":data}) : helper)))
    + "</span>\n                <span class=\"record-value\">"
    + alias3(((helper = (helper = helpers.record || (depth0 != null ? depth0.record : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"record","hash":{},"data":data}) : helper)))
    + "</span>\n            </a>\n\n            <i class=\"fa fa-ellipsis-v record-menu-button\"></i>\n        </div>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.empty : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

if (typeof exports === 'object' && exports) {module.exports = this["App"]["Templates"];}