package voter_test

import (
	"testing"

	keepertest "github.com/coreators/voter/testutil/keeper"
	"github.com/coreators/voter/x/voter"
	"github.com/coreators/voter/x/voter/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		PollList: []types.Poll{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PollCount: 2,
		VoteList: []types.Vote{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		VoteCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.VoterKeeper(t)
	voter.InitGenesis(ctx, *k, genesisState)
	got := voter.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.PollList, len(genesisState.PollList))
	require.Subset(t, genesisState.PollList, got.PollList)
	require.Equal(t, genesisState.PollCount, got.PollCount)
	require.Len(t, got.VoteList, len(genesisState.VoteList))
	require.Subset(t, genesisState.VoteList, got.VoteList)
	require.Equal(t, genesisState.VoteCount, got.VoteCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
