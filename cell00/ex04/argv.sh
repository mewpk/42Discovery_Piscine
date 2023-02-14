numbers=3
if [ $# -eq 0 ]; then
	echo "No arguments supplied"
elif [ $# -le 3 ]; then
	for i in "$@"; do
		echo "$i"
	done
elif [ $# -gt 3 ]; then
	for i in "$@"; do
		if [ "$numbers" -gt 0 ]; then
			echo "$i"
			let "numbers=numbers-1"
		fi
	done
fi