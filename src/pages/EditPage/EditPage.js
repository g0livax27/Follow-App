import EditForm from '../../components/EditForm/EditForm';

export default function EditPage({ months, user }) {
    return (
        <main>
            <h1>Edit Expense</h1>
            <EditForm months={months} />
        </main>
    )
};