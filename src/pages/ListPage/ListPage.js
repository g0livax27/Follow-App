import NewExpenseButton from '../../components/NewExpenseButton/NewExpenseButton';
import Cards from '../../components/Cards/Cards';

export default function ListPage({ user }) {
    return (
        <main>
            <NewExpenseButton />
            <Cards />
        </main>
    )
};