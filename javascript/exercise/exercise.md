#### 1

```
a = ["az", "toto", "picaro", "zone", "kiwi"] -->

[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

or

a = {"az", "toto", "picaro", "zone", "kiwi"} -->

{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}

or

a = ["az", "toto", "picaro", "zone", "kiwi"] -->

[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

or

a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->

[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
```
