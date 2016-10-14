import { test } from 'qunit';
import moduleForAcceptance from 'mail-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list emails');

test('should list mails for selected folder.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.mails .selected-mail-folder').length, 3, 'should see 3 emails');
  });
});

test('should show count of unread email in folder.', function (assert) {
});
