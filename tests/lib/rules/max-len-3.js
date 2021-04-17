/**
 * @fileoverview enforce a maximum line length
 * @author Alasdair
 */
"use strict";
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/max-len-3"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("max-len-3", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "const foo = bar.baz.qux('this is a very long string which goes over the configured limit')",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
