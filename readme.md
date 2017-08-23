# Package Duplication Report
Prints a list of duplicated packages in your repository from the command list

### Usage

```bash
npm install -g package-duplication-report
package-duplication-report
```

The output looks like this:

```
readable-stream:
  2.2.9, package-duplication-report->find-duplicate-dependencies->npm->fs-write-stream-atomic, readable-stream@2.2.9
  1.1.14, package-duplication-report->find-duplicate-dependencies->npm->sorted-union-stream->from2, readable-stream@>=1.1.10 <1.2.0
once:
  1.4.0, package-duplication-report->find-duplicate-dependencies->npm->glob, once@1.4.0
  1.3.3, package-duplication-report->find-duplicate-dependencies->npm->mississippi->duplexify->end-of-stream, once@>=1.3.0 <1.4.0
end-of-stream:
  1.0.0, package-duplication-report->find-duplicate-dependencies->npm->mississippi->duplexify, end-of-stream@1.0.0
  1.1.0, package-duplication-report->find-duplicate-dependencies->npm->mississippi, end-of-stream@>=1.1.0 <2.0.0
from2:
  2.3.0, package-duplication-report->find-duplicate-dependencies->npm->mississippi, from2@>=2.1.0 <3.0.0
  1.3.0, package-duplication-report->find-duplicate-dependencies->npm->sorted-union-stream, from2@>=1.3.0 <2.0.0
minimist:
  0.0.8, package-duplication-report->find-duplicate-dependencies->npm->mkdirp, minimist@0.0.8
  1.2.0, package-duplication-report->find-duplicate-dependencies->npm->update-notifier->latest-version->package-json->registry-auth-token->rc, minimist@>=1.2.0 <2.0.0
nopt:
  3.0.6, package-duplication-report->find-duplicate-dependencies->npm->node-gyp, nopt@>=2.0.0 <3.0.0||>=3.0.0 <4.0.0
  4.0.1, package-duplication-report->find-duplicate-dependencies->npm, nopt@4.0.1
string-width:
  1.0.2, package-duplication-report->find-duplicate-dependencies->npm->npmlog->gauge, string-width@>=1.0.1 <2.0.0
  2.0.0, package-duplication-report->find-duplicate-dependencies->npm->update-notifier->boxen, string-width@>=2.0.0 <3.0.0
is-fullwidth-code-point:
  1.0.0, package-duplication-report->find-duplicate-dependencies->npm->npmlog->gauge->string-width, is-fullwidth-code-point@>=1.0.0 <2.0.0
  2.0.0, package-duplication-report->find-duplicate-dependencies->npm->update-notifier->boxen->string-width, is-fullwidth-code-point@>=2.0.0 <3.0.0
isarray:
  1.0.0, package-duplication-report->find-duplicate-dependencies->npm->readable-stream, isarray@>=1.0.0 <1.1.0
  0.0.1, package-duplication-report->find-duplicate-dependencies->npm->sorted-union-stream->from2->readable-stream, isarray@0.0.1
string_decoder:
  1.0.0, package-duplication-report->find-duplicate-dependencies->npm->readable-stream, string_decoder@>=1.0.0 <1.1.0
  0.10.31, package-duplication-report->find-duplicate-dependencies->npm->sorted-union-stream->from2->readable-stream, string_decoder@>=0.10.0 <0.11.0
assert-plus:
  0.2.0, package-duplication-report->find-duplicate-dependencies->npm->request->http-signature, assert-plus@>=0.2.0 <0.3.0
  1.0.0, package-duplication-report->find-duplicate-dependencies->npm->request->http-signature->sshpk, assert-plus@>=1.0.0 <2.0.0
```
