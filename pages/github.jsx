import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.gitHead}>
        {user.avatar_url && (
          <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={120}
              height={120}
            />
          </a>
        )}

        <div>
          <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer" className={styles.links}>
            <h3 className={styles.username}>{user.login}</h3>
            <div className={styles.userInfo}>
              <div className={styles.user}>{user.followers} followers</div>
              <div className={styles.user}>{user.public_repos} repos</div>
            </div>
          </a>

          <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer" className={styles.links}>
            <button className={styles.button}>Open GitHub</button>
          </a>
        </div>
      </div>

      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>

      <div className={styles.contributions}>
        <GitHubCalendar
          username={'shivanshsin0203'}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const userRes = await fetch(
      `https://api.github.com/users/shivanshsin0203`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const user = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/shivanshsin0203/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    let repos = await repoRes.json();

    // Ensure repos is an array
    if (Array.isArray(repos)) {
      // Filter the repositories to only include the specified names
      const filteredRepos = repos.filter((repo) =>
        ['Repl', 'AiArchiText', 'ShoeSale', 'Creedo', 'ReactDockerBridge', 'FiileManager'].includes(repo.name)
      );

      repos = filteredRepos;
    } else {
      repos = [];
    }

    return {
      props: { title: 'GitHub', repos, user },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { title: 'GitHub', repos: [], user: {} },
      revalidate: 10,
    };
  }
}

export default GithubPage;
