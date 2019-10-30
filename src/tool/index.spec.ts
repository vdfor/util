import assert, { equal } from 'assert';
import * as tool from './index';

describe('[tool - uuidGen] run test', () => {
  it('should return string correctly', () => {
    const prefix = 'test-prefix';
    const prefixLen = prefix.length;
    const uuidStr = tool.uuidGen(prefix);
    equal(uuidStr.substring(0, prefixLen), prefix);
  });
});

describe('[tool - removeHtmlTag] run test', () => {
  it('should return string correctly', () => {
    const text = tool.removeHtmlTag('<p>123</p><div style="color:#ffffff;">Test<span>YU</span>  </div><script></script>');
    equal(text, '123TestYU');
  });
});

describe('[tool - escape] run test', () => {
  it('should complete this test ', () => {
    tool.escape('<div>@vdfor/util</div><script></script>');
    assert.ok(true);
  });
});
