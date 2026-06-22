import { Card, Table } from "@heroui/react";

export function MyRequest() {
  return (
    <Card>
      <Card.Header>
        <h2 className="text-3xl font-bold">My Requests</h2>
      </Card.Header>
      <p className="mt-3 text-default-500">
        Here you can manage all your adoption requests and track their current
        status.
      </p>

      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-150">
            <Table.Header>
              <Table.Column isRowHeader>Pet Name</Table.Column>
              <Table.Column>Request Date</Table.Column>
              <Table.Column>Pickup Date</Table.Column>
              <Table.Column>Status</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Kate Moore</Table.Cell>
                <Table.Cell>CEO</Table.Cell>
                <Table.Cell>kate@acme.com</Table.Cell>
                <Table.Cell>Active</Table.Cell>
              </Table.Row>
              
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </Card>
  );
}
