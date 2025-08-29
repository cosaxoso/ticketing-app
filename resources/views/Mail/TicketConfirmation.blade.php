<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Ticket Confirmation</title>
</head>
<body>
    <h2>Ticket #{{ $ticketNumber }} Created</h2>

    <p><strong>Name:</strong> {{ $ticketName }}</p>
    <p><strong>Email:</strong> {{ $ticketEmail }}</p>
    <p><strong>Subject:</strong> {{ $ticketSubject }}</p>
    <p><strong>Details:</strong> {!! nl2br(e($ticketDetails)) !!}</p>
    <p><strong>Department:</strong> {{ $ticketDepartment }}</p>
    <p><strong>Status:</strong> {{ ucfirst($ticketStatus) }}</p>
</body>
</html>