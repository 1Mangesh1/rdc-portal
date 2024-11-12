# GitHub Workflow and Branch Protection Guide

## Overview

This document outlines our repository's workflow and branch protection rules to maintain code quality and ensure efficient collaboration. All team members must follow these guidelines when contributing to the project.

## 1. Repository Structure

### Core Branches

| Branch    | Purpose | Protection Level |
|-----------|---------|-----------------|
| `main`    | Production-ready code | Fully protected |
| `develop` | Active development and testing | Protected |
| `feature/*` | Individual feature development | None |

### Branch Protection Overview
- `main`: Protected, requires PR and review
- `develop`: Protected, requires PR
- `feature/*`: No restrictions

## 2. Development Workflow

### 2.1 Creating a Feature Branch

```bash
# Update develop branch
git checkout develop
git pull origin develop

# Create and switch to new feature branch
git checkout -b feature/your-feature-name
```

### 2.2 Development Process

1. Make changes in your feature branch
2. Commit frequently with meaningful messages
3. Push to remote regularly:
```bash
git push origin feature/your-feature-name
```

### 2.3 Pull Request Process

#### Submitting a PR
1. Push final changes to your feature branch
2. Visit GitHub repository
3. Create new Pull Request
4. Set base: `develop`, compare: `feature/your-feature-name`
5. Complete PR template:
   - Title: Brief, descriptive summary
   - Description: Detailed explanation of changes
   - Reviewers: Add required reviewers
   - Labels: Add relevant labels

#### PR Review Workflow
1. Reviewer(s) examine code
2. Address feedback if requested
3. Obtain approval
4. Merge when ready

### 2.4 Merging to Main

#### Process
1. Create PR from `develop` to `main`
2. Ensure all tests pass
3. Obtain required approvals
4. Release manager performs merge

## 3. Branch Protection Rules

### Main Branch Protection

#### Required
- Pull request reviews (minimum 1)
- Status checks must pass
- Branch must be up to date
- Linear history maintained

#### Restricted
- Direct pushes blocked
- Force pushes prohibited
- Branch deletion prevented

### Develop Branch Protection

#### Required
- Pull request reviews
- Status checks must pass
- Branch must be up to date

## 4. Best Practices

### Commit Messages
```
<type>: <subject>

[optional body]
[optional footer]
```

#### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

### Pull Requests

#### Title Format
```
<type>(<scope>): <short summary>
```

#### Description Template
```markdown
## Description
[Detailed description of changes]

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing performed

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code as needed
- [ ] I have updated the documentation
```

## 5. Issue Management

### Issue Labels

| Label | Purpose |
|-------|---------|
| `bug` | Bug reports |
| `feature` | Feature requests |
| `documentation` | Documentation updates |
| `enhancement` | Improvements to existing features |
| `help wanted` | Extra attention needed |
| `priority` | Urgent issues |

### Project Board Workflow

#### Columns
1. **Backlog**
   - Newly created issues
   - Not yet prioritized
2. **To Do**
   - Prioritized issues
   - Ready for development
3. **In Progress**
   - Currently being worked on
   - Assigned to team member
4. **Review**
   - PR created
   - Awaiting review
5. **Done**
   - Merged to develop/main
   - Closed issues

## 6. Quick Reference

### Common Commands
```bash
# Create feature branch
git checkout -b feature/name

# Update feature branch
git pull origin develop

# Push changes
git push origin feature/name

# Update develop
git checkout develop
git pull origin develop
```

### PR Checklist
- [ ] Branch up to date with develop
- [ ] All tests passing
- [ ] Code reviewed locally
- [ ] Documentation updated
- [ ] PR template completed
- [ ] Reviewers assigned


---
*Last Updated: 2024-11-11*
*Version: 1.0*