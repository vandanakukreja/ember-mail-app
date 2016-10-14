export default function() {
    this.get('mailbox');
    this.get('mailbox/:mailbox_id');
    this.get('mail');
    this.get('mail/:message_id');
    this.get('emails');
}
