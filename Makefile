#Use bash as shell
SHELL = /bin/bash

help: ## Display this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

generate_api_pages: ## Generate api pages.
	@{ \
	echo "***************************************************************************"; \
	echo "Generating API docu pages..."; \
	cd data/apis; \
	jq -cr '.[] | .name, .spec' list.json | awk NF | awk 'NR%2 {name=$$0;filename=name".md"; next}{print "---"; print "title: "name" API"; print "---\n"; print "{{< api-docs \`" $$0 "\` >}}"}'; \
	echo "Done"; \
	echo "Moving generated pages to 'content/docs'" ;\
	echo "WARNING: It will overwrite any destination file with the same name" ;\
	mv -f *.md ../../content/docs ;\
	echo "Done"; \
	echo "***************************************************************************"; \
	}

build: ## Builds the static site
	@echo "Building site"
	@hugo --minify
