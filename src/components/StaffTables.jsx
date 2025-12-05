import { Table } from "flowbite-react";

export default function StaffTables() {
  const staff = [
    { name: "Ajit KC", position: "Lecturer", contact: "9849185233" },
    { name: "Bhim Karki", position: "Lecturer", contact: "9851081451" },
    // add all here...
  ];

  return (
    <section id="staffs" className="py-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Teaching Staff</h2>

      <Table striped>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Position</Table.HeadCell>
          <Table.HeadCell>Contact</Table.HeadCell>
        </Table.Head>

        <Table.Body>
          {staff.map((p) => (
            <Table.Row key={p.name}>
              <Table.Cell>{p.name}</Table.Cell>
              <Table.Cell>{p.position}</Table.Cell>
              <Table.Cell>{p.contact}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}
